declare const chartGroups: ({
    name: string;
    charts: ({
        name: string;
        selector: string;
        inputFormat: string;
        options: string[];
        defaults: {
            xAxisLabel: string;
            yAxisLabel: string;
            cAxisLabel?: undefined;
        };
    } | {
        name: string;
        selector: string;
        inputFormat: string;
        options: string[];
        defaults?: undefined;
    } | {
        name: string;
        selector: string;
        inputFormat: string;
        options: string[];
        defaults: {
            yAxisLabel: string;
            cAxisLabel: string;
            xAxisLabel?: undefined;
        };
    })[];
} | {
    name: string;
    charts: ({
        name: string;
        selector: string;
        inputFormat: string;
        options: string[];
        defaults?: undefined;
    } | {
        name: string;
        selector: string;
        inputFormat: string;
        options: string[];
        defaults: {
            width: number;
            height: number;
            yAxisLabel?: undefined;
            xAxisLabel?: undefined;
            linearScale?: undefined;
        };
    } | {
        name: string;
        selector: string;
        inputFormat: string;
        options: string[];
        defaults: {
            yAxisLabel: string;
            xAxisLabel: string;
            linearScale: boolean;
            width?: undefined;
            height?: undefined;
        };
    })[];
})[];
export default chartGroups;
