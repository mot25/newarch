export interface ICategory {
    category_id: string;
    category_name: string;
    category_icon: string;
    services: IService[];
}

export interface IService {
    service_id: string;
    service_name: string;
    service_icon: string;
}