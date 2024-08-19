export interface Game {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    description: string;
    totalFights: string;
}

export interface GetGameResponse {
    games: Game[];
    count: number;
}

export interface GetGameByIdResponse {
    game: Game;
}

export interface CreateGameResponse {
    id: string;
    email: string;
    role: string;
}

export interface GetGameProps {
    name?: string;

    skip?: number;
    limit?: number;
}
