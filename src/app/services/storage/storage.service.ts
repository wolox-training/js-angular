import { Injectable } from '@angular/core';
import { StorageModule } from './storage.module';

@Injectable({
  providedIn: StorageModule
})
export class StorageService {

  public localSetItem<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item))
  }

  public localGetItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key) as string
      if (item) {
        return JSON.parse(item)
      }
      return null
    } catch (e) {
      return null
    }
  }

  public localRemoveItem(key: string): void {
    localStorage.removeItem(key)
  }

  public sessionSetItem<T>(key: string, item: T): void {
    sessionStorage.setItem(key, JSON.stringify(item))
  }

  public sessionGetItem<T>(key: string): T | null {
    try {
      const item = sessionStorage.getItem(key) as string
      if (item) {
        return JSON.parse(item)
      }
      return null
    } catch {
      return null
    }
  }

  public sessionRemoveItem(key: string): void {
    sessionStorage.removeItem(key)
  }

}
