export interface User {
    first_name: string,
    second_name: string,
    email: string,
    login: string,
    avatar: string,
    phone: string
}

export interface UserForReg extends User {
    password: string
}
