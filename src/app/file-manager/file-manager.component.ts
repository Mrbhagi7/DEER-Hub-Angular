import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FileData {
  name: string;
  description: string;
  type: string;
  date: string;
  url: string;
}

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent {
  files: FileData[] = [];
  searchText = '';
  showUploadForm = false;
  selectedType = 'All';
  selectedFile: File | null = null;

  // Validation state
  nameError = false;
  fileError = false;

  // Success message
  successMessage = '';

  get totalFiles() {
    return this.files.length;
  }

  get filesYouOwn() {
    return this.files.length;
  }

  get uploadedThisMonth() {
    const currentMonth = new Date().getMonth();
    return this.files.filter(f => new Date(f.date).getMonth() === currentMonth).length;
  }

  get filteredFiles() {
    let result = this.files.filter(file =>
      file.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      file.description.toLowerCase().includes(this.searchText.toLowerCase())
    );

    if (this.selectedType !== 'All') {
      result = result.filter(file => file.type === this.selectedType);
    }
    return result;
  }

  openUploadForm() {
    this.showUploadForm = true;
    this.nameError = false;
    this.fileError = false;
    this.successMessage = '';
  }

  closeUploadForm() {
    this.showUploadForm = false;
    this.selectedFile = null;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] || null;
    this.fileError = false;
  }

  submitUpload(name: string, description: string) {
    // Reset errors
    this.nameError = false;
    this.fileError = false;

    if (!name || name.trim() === '') {
      this.nameError = true;
    }

    if (!this.selectedFile) {
      this.fileError = true;
    }

    if (this.nameError || this.fileError) {
      return;
    }

    const fileURL = URL.createObjectURL(this.selectedFile!);
    const newFile: FileData = {
      name: name.trim(),
      description,
      type: this.selectedFile!.type || 'Unknown',
      date: new Date().toISOString().split('T')[0],
      url: fileURL
    };

    this.files.push(newFile);
    this.selectedFile = null;
    this.showUploadForm = false;

    // Show success message
    this.successMessage = 'File has been successfully uploaded!';
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }

  setFilter(type: string) {
    this.selectedType = type;
  }

  openFile(file: FileData) {
    window.open(file.url, '_blank');
  }
}
