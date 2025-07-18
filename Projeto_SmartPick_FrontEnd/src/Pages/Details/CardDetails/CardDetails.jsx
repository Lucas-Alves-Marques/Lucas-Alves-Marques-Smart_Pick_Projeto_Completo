import Style from './CardDetails.module.css'

function CardDetails({ cat, items, position }) {

    return (

        <div className={Style.card}>

            <h2>{cat}</h2>

            <ul>

                {items.map((item) => {

                    if (item.id_category == position) {

                        return (

                            <li>{item.name}</li>

                        )

                    }

                })

                }

            </ul>

        </div>
    )

}

export default CardDetails;
