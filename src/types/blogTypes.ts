export interface Blog {
    _id: string | number;
    name: string;
    author: string;
    createdAt: string;
    updatedAt: string;
}

export interface BlogPaginatedResponse {
    data: Blog[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
}


