import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FileData {
  name: string;
  description: string;
  type: string;
  date: string;
  url: string; // object URL to open file
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
  }

  closeUploadForm() {
    this.showUploadForm = false;
  }

  onFileUpload(event: any, name: string, description: string) {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // create object URL
      const newFile: FileData = {
        name: name || file.name,
        description,
        type: file.type || 'Unknown',
        date: new Date().toISOString().split('T')[0],
        url: fileURL
      };
      this.files.push(newFile);
      this.showUploadForm = false;
    }
  }

  setFilter(type: string) {
    this.selectedType = type;
  }

  openFile(file: FileData) {
    window.open(file.url, '_blank');
  }
}
