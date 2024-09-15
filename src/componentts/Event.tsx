import { useContext } from "react"
import { Context } from "../lib/Context"
import { IEvent, ActionTypes } from "../lib/Types"

interface IProps {
    event: IEvent
}

export const Event: React.FC<IProps> = ({ event }) => {
    const { dispatch } = useContext(Context) //es pahy nayel em ?
    


    return (
        <div>
            <img src={event.cover} alt={event.title} />
            <p>{event.title}</p>
            <p>{event.date} at {event.time}</p>
            <strong>{event.type}</strong>
            <p>By {event.composer}</p>
            <button onClick={() => dispatch({type: ActionTypes.DeleteEvent, payload: event.id})}>
                Delete
            </button>
        </div>
    )
}