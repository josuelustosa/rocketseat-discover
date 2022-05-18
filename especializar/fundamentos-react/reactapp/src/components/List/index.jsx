import './styles.css';

export function List({name,url,index}) {

    return(
        <div className='list'>
            <strong>{index}</strong>
            <strong>{name}</strong>
            <small>{url}</small>
        </div>
    )
}