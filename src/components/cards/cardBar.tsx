import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryTheme,
} from 'victory-native';
import barChartModel, {labelBarChartModel} from '../../model/barChart';
import {theme} from '../../theme/theme';
interface PropsTypes {
  dataSource?: {x: string; y: string | number; colorScale: string}[];
}
function CardBar(props: PropsTypes) {
  const dataSource = props.dataSource || barChartModel;
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryAxis
        theme={VictoryTheme.material}
        standalone={false}
        style={{tickLabels: {fill: theme.colors.text}}}
      />
      <VictoryAxis
        dependentAxis
        crossAxis
        theme={VictoryTheme.material}
        standalone={false}
        style={{tickLabels: {fill: theme.colors.text}}}
      />
      <VictoryBar
        style={{data: {fill: d => d.datum.colorScale}}}
        data={dataSource}
        labelComponent={<VictoryLabel textAnchor="start" />}
      />
      <VictoryLegend
        x={0}
        y={10}
        centerTitle
        orientation="horizontal"
        style={{title: {fontSize: 20, color: theme.colors.text}}}
        data={labelBarChartModel}
      />
    </VictoryChart>
  );
}
export default CardBar;
