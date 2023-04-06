import React from 'react'
import styled from 'styled-components'
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const Total = styled.div`
  grid-column:1/3;
  padding: 2rem;
  font-size: 2rem

    &.graphItem{
        box-shadow: 0 10px 20px rgba(0,0,0, .1);
        border-radius: .2rem;
        align-items: center;
    }

    @media (max-width: 40rem){
        grid-column: 1;
    }
` 
const Graph = styled.section`
    display: grid;  
    gap: 2rem; 
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem

    .graphItem{
        box-shadow: 0 10px 20px rgba(0,0,0, .1);
        border-radius: .2rem;
        align-items: center;
    }

    @media (max-width: 40rem){
        grid-template-columns: 1fr;
        
    }
`
export default function UserStatsGraphs({data}){
    const [graph,setGraph] = React.useState([]);
    const [total,setTotal] = React.useState(0);

    React.useEffect(()=>{
        const graphData = data.map(item=>{
            return {
                x:item.title,
                y:Number(item.acessos)
            }
        })
        setTotal(
            data
                .map(({acessos})=>Number(acessos))
                .reduce((a,b)=> a + b)
        )
        setGraph(graphData)
    },[data]);

    
  return (
    <Graph className='animeLeft'>
        <Total className='graphItem'>
            <p> Acessos:{total}</p>
        </Total>
        <div className='graphItem'>
            <VictoryPie
                data={graph}
                innerRadius={50}
                padding={{
                    top: 20,
                    bottom: 20,
                    left: 80,
                    right: 80
                }}  
                style={{
                    data: {
                        fillOpacity: .9,
                        stroke: '#fff',
                        strokeWidth: 2
                    },
                    labels: {
                        fill: '#333',
                        fontSize: 14,
                        fontFamily: 'Roboto'
                    }
                }}
            />
        </div>
        <div className='graphItem'>
            <VictoryChart
                
            >
                <VictoryBar
                    
                    data={graph}
                    style={{ data: { fill: "#c43a31" } }}
                    alignment="start"
                />
            </VictoryChart>
        </div>
      
    </Graph>
  )
}
