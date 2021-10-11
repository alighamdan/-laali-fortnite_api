export default interface FortnitePlaylists {
    data: Array<{
        id: string
        name: string;
        subName: string;
        description: string;
        gameType: string;
        ratingType: string;
        minPlayers: number;
        maxPlayers: number;
        maxTeams: number;
        maxTeamSize: number;
        maxSquads: number;
        maxSquadSize: number;
        isDefault: boolean;
        isTournament: boolean;
        isLimitedTimeMode: boolean;
        isLargeTeamGame: boolean;
        accumulateToProfileStats: boolean;
        images: {
            showcase: string;
            missionIcon: string;
        }
        gameplayTags: Array<string>;
        path: string;
        added: Date;
    }>
}