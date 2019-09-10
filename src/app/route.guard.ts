import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UowService } from './services/uow.service';

@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {

    constructor(private router: Router, private uow: UowService) { }

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        // * remeber me
        const ls: { email: string, password: string, rememberMe: boolean } = JSON.parse(localStorage.getItem('USER'));
        if (ls) {
            const u = await this.uow.users.findOne({ where: { email: ls.email } }).toPromise();
            console.log('guard: ', u.password === ls.password)
            if (u.password === ls.password) {
                return true;
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
