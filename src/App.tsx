import GoalsModalStep1 from './components/ui/GoalsModalStep1'
import GoalsModalStep2 from './components/ui/GoalsModalStep2'
import CompleteInitiative from './components/ui/CompleteInitiative'
import OverallReductionTarget from './components/ui/OverallReductionTarget'
import ReductionMeasuresSummary from './components/ui/ReductionMeasuresSummary'
import DecarbonisationMain from './components/DecarbonisationMeasures/DecarbonisationMain'
import CreateTarget from './components/CreateTarget/CreateTargetMain'
import TargetSummary from './components/TargetSummary/TargetSummary'
export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#F7F0E7',
        display: 'flex',
        height: '100vh',
      }}
      className="container"
    >
      <TargetSummary />
    </div>
  )
}
