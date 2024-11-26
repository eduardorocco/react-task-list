import './App.css'
import tasks from '../tasks'

const title = 'Task Manager'

function App() {

    const backlogOrInProgress = tasks.filter(task => 
        task.state === 'backlog' ||
        task.state === 'in_progress'
    )
    return (
        <>
            <div className='header'>
                <h1>{title}</h1>
            </div>
            <div className='container'>
                <h2>Current Tasks</h2>
                <ul>
                    {backlogOrInProgress.map(task => (
                        <li>
                            <strong>{task.title}</strong>
                            <p>Priority:{task.priority}</p>
                            <p>Est. time:{task.estimatedTime}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
        </>
        
    )
}

export default App