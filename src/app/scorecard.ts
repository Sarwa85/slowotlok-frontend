export interface ScoreCardRequest {
    card_id: number
    good: number
    bad: number
}

export interface ScoreCardResponse {
    id: number
    card_id: number
    good: number
    bad: number
}