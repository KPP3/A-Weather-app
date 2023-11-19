import styles from './Table.module.css';
function Table({ list }) {
  console.log(list)
  return (
    <div>
       {/* <p>{list[0].name}</p>  */}
       
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Temp Min</th>
            <th>Temp Max Probability</th>
            <th>Humidity Avg</th>
          </tr>
        </thead>
         <tbody>
           {list &&
            list.map((item) => ( 
              <tr key={item.id}>
                 <td>{item.time}</td>
                <td>{item.values.temperatureMin}</td> 
                <td>{item.values.temperatureMax}</td>  
                <td>{item.values.humidityAvg}</td>  
              </tr>

           ))} 
        </tbody> 
      </table>
    </div>
  );
}

export default Table;