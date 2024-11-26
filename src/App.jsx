import './App.css'
import tasks from '../tasks'

const title = 'Task Manager'

function App() {

    const backlogOrInProgress = tasks.filter(task => 
        task.state === 'backlog' ||
        task.state === 'in_progress'
    )

    const completed = tasks.filter(task => task.state === 'completed')
    return (
        <>
            <div className='header'>
                <h1>{title}</h1>
            </div>
            <div className='container'>
                <h2>Current Tasks({backlogOrInProgress.length})</h2>
                <ul>
                    {backlogOrInProgress.map(task => (
                        <li>
                            <div className='task title'>
                                <strong>{task.title}</strong>
                                <strong className={`badge ${task.state}`}>{task.state}</strong>
                            </div>
                            
                            <p>Priority:{task.priority}</p>
                            <p>Est. time:{task.estimatedTime}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <h2>Completed Tasks({completed.length})</h2>
                <ul>
                {completed.map(task => (
                        <li>
                            <div className='task title'>
                                <strong>{task.title}</strong>
                                <strong className={`badge ${task.state}`}>{task.state}</strong>
                            </div>
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