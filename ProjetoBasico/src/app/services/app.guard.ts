import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad {

    user = {admin: true, logged: false};

    canLoad() : boolean {
        return this.user.admin;
    }

    canActivate(): boolean {
        return this.user.logged;
    }
}