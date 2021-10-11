export default interface Fortnitemap {
    images: {
        blank: string;
        pois: string;
    },
    pois: Array<{
        id: string;
        name: string;
        location: {
            x: number;
            y: number;
            z: number;
        }
    }>
}