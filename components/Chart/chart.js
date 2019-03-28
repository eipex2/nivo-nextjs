import { ResponsiveBar } from '@nivo/bar'

import data from '../../data'
import config from './config'

class Chart extends React.Component {

    render() {
        return (
            <div className="chart">
                <ResponsiveBar
                    data={data}
                    keys={config.keys}
                    indexBy="country"
                    margin={config.margin}
                    padding={0.3}
                    colors="nivo"
                    colorBy="id"
                    defs={config.defs}
                    fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={config.legends}
                />
                <style jsx>{`
                    .chart {
                        height:50vh;
                        width:60vw;
                        background: white;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                            transition: 0.3s;
                    }

                    .chart:hover {
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                    }
                `}</style>
            </div>
        )
    }
}

export default Chart