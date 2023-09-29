import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStrategy {
  private storedRouteHandles = new Map<string, DetachedRouteHandle>();

  shouldReuseRoute(current: ActivatedRouteSnapshot, next: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.storedRouteHandles.set(route.routeConfig!.path as string, handle);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRouteHandles.get(route.routeConfig!.path as string) as DetachedRouteHandle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.storedRouteHandles.has(route.routeConfig!.path as string);
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  deleteRouteSnapshot(path: string): void {
    this.storedRouteHandles.delete(path);
  }

  ngRouteReuseStrategy() { }
}