export default interface BattleRoyalnews {
    data: {
        hash: string;
        date: Date;
        image: string;
        motds: Array<{
            id: string;
            title: string;
            tabTitle: string;
            body: string;
            image: string;
            titleImage: string;
            sortingPriority: number;
            hidden: boolean;  
        }>
        messages: Array<{
            title: string;
            body: string;
            image: string;
            adspace: string;
        }>
    }
}