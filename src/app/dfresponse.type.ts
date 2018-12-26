export interface Meta {
    count: number;
    next: number;
}

export interface DFResponse<Tipo> {
    resource: Tipo[];
    meta: Meta;
}