type ArtProduct = {
    product_id: number;
    title: string;
    price: number;
    materials: string;
    height: number;
    width: number;
    images?: string[];
    types?: ArtType[];
};

type ArtType = {
    product_id: number;
    type: string;
    price: number;
    materials: string;
    height: number;
    width: number;
    sold: boolean;
};
