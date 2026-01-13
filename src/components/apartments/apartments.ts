import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { apartment } from '../../Models/apartment';
import { ApartmentService } from '../../service/apartment.service';

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apartments.html',
  styleUrls: ['./apartments.scss']
})
export class Apartments implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  allApartments: apartment[] = [];
  filteredApartments: apartment[] = [];
  currentListings: apartment[] = [];
  cities: string[] = [];
  
  listingType: string = 'all';
  currentPage: number = 1;
  searchTerm: string = '';
  showFilters: boolean = false;
  selectedApartment: apartment | null = null;
  
  filters = {
    minPrice: '',
    maxPrice: '',
    city: '',
    minRooms: '',
    minSize: ''
  };

  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    // Subscribe to apartments data
    this.apartmentService.data$
      .pipe(takeUntil(this.destroy$))
      .subscribe(apartments => {
        this.allApartments = apartments;
        this.applyFilters();
      });

    // Subscribe to cities
    this.apartmentService.getCities()
      .pipe(takeUntil(this.destroy$))
      .subscribe(cities => {
        this.cities = cities;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setListingType(type: string): void {
    this.listingType = type;
    this.currentPage = 1;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  applyFilters(): void {
    let result = [...this.allApartments];

    // Filter by type
    if (this.listingType !== 'all') {
      result = result.filter(apt => apt.type === this.listingType);
    }

    // Filter by search term
    if (this.searchTerm) {
      result = result.filter(apt =>
        apt.title.includes(this.searchTerm) ||
        apt.city.includes(this.searchTerm) ||
        apt.neighborhood.includes(this.searchTerm)
      );
    }

    // Apply filters
    if (this.filters.minPrice) {
      result = result.filter(apt => apt.price >= Number(this.filters.minPrice));
    }
    if (this.filters.maxPrice) {
      result = result.filter(apt => apt.price <= Number(this.filters.maxPrice));
    }
    if (this.filters.city) {
      result = result.filter(apt => apt.city === this.filters.city);
    }
    if (this.filters.minRooms) {
      result = result.filter(apt => apt.rooms >= Number(this.filters.minRooms));
    }
    if (this.filters.minSize) {
      result = result.filter(apt => apt.size >= Number(this.filters.minSize));
    }

    this.filteredApartments = result;
    this.totalPages = Math.ceil(this.filteredApartments.length / this.itemsPerPage);
    this.updateCurrentListings();
  }

  updateCurrentListings(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.currentListings = this.filteredApartments.slice(startIndex, startIndex + this.itemsPerPage);
  }

  resetFilters(): void {
    this.filters = {
      minPrice: '',
      maxPrice: '',
      city: '',
      minRooms: '',
      minSize: ''
    };
    this.applyFilters();
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updateCurrentListings();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCurrentListings();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCurrentListings();
    }
  }

  openModal(apartment: apartment): void {
    this.selectedApartment = apartment;
  }

  closeModal(): void {
    this.selectedApartment = null;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('he-IL');
  }

  getTypeCount(type: string): number {
    if (type === 'all') {
      return this.allApartments.length;
    }
    return this.allApartments.filter(apt => apt.type === type).length;
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}