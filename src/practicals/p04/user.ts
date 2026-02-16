export class User {
    
    public username: string;     
    private password: string;    
    private static LOGIN_ATTEMPTS: number = 0;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }




    private validatePassword(password: string): boolean {
        if(this.password === password){
            return true
        }
        else{
            return false
        }
    }

    public login(password: string): boolean {
        if (this.validatePassword(password)) {
            return true;
        } else {
            return false;
        }
    }

    public getLoginAttempts(): number {
        User.LOGIN_ATTEMPTS = User.LOGIN_ATTEMPTS + 1;
        return User.LOGIN_ATTEMPTS;
    }
}

