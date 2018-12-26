export interface Dfsession {
    session_token: string;
    session_id: string;
    id: number;
    name: string;
    first_name?: string;
    last_name?: string;
    email: string;
    is_sys_admin: boolean;
    last_login_date: string;
    host: string;
}
