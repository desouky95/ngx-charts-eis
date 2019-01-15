export declare const single: {
    name: string;
    value: number;
}[];
export declare const multi: {
    name: string;
    series: {
        name: string;
        value: number;
    }[];
}[];
export declare const fiscalYearReport: {
    name: string;
    series: {
        name: string;
        value: number;
    }[];
}[];
export declare const bubble: {
    name: string;
    series: {
        name: string;
        x: Date;
        y: number;
        r: number;
    }[];
}[];
export declare function generateGraph(nodeCount: number): {
    links: any[];
    nodes: any[];
};
export declare function timelineFilterBarData(): any[];
export declare function generateData(seriesLength: number, includeMinMaxRange: boolean, dataPoints?: number): any[];
export declare const treemap: {
    name: string;
    children: {
        name: string;
        children: ({
            name: string;
            children: ({
                name: string;
                size: number;
                children?: undefined;
            } | {
                name: string;
                children: {
                    name: string;
                    size: number;
                }[];
                size?: undefined;
            })[];
            size?: undefined;
        } | {
            name: string;
            size: number;
            children?: undefined;
        })[];
    }[];
}[];
