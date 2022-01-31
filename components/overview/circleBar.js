import React from "react"
import {PieChart} from 'react-minimal-pie-chart'

class CircleBar extends React.Component{
    render(){
        return(
            <>
                <PieChart data={[
                    {title: '60', value: 80, color: '#aaa'},
                    {title: '', value: 120, color: '#fff'}
                ]} />
            </>
        )
    }
}

export default CircleBar