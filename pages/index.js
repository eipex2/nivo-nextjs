import { Chart } from '../components'

export default () => (
    <div className="container">
        <Chart />
        <style jsx global>{`
            body {
                height: 100vh;
                width: 100vw;
                display: grid;
                text-align: center;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
)