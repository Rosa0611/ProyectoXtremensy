export interface Activity {
    producto: string;
    categoria: string;
    referencia: number;
    tamaño: number;
    cantidad: number;
    precio: number;
    total: number;
    medida: string;
    status?: boolean;
}