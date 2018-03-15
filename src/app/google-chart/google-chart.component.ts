import { Component, OnInit, Input } from '@angular/core';
declare var google: any;

@Component({
    selector: 'app-google-chart',
    templateUrl: './google-chart.component.html',
    styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {

    @Input() chartType: String;
    @Input() chartData: String;

    constructor() {

    }

    ngOnInit() {

        google.charts.load('current', { 'packages': ['corechart'] });
        console.log('Type of chart : ' + this.chartType.toString());
        const that: any = this;
        google.charts.setOnLoadCallback(drawChart, that);
        // this.drawChart();
        // tslint:disable-next-line:no-shadowed-variable
        function drawChart(that) {
            const data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ]);
            const options = {
                title: 'My Daily Activities'
            };
            const chart = new google.visualization[that.chartType.toString()](document.getElementById('chart'));
            chart.draw(data, options);
        }
    }

    public updateChartData(): void {
    }

}
