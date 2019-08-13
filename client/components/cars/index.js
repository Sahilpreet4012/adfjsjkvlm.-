import React from "react";
import Axios from "axios";

function Index() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    Axios.get('/api/cars')
      .then(result => {
        setCars(result.data);
      })
      .catch(err => console.error(err));
  }, []);
    

  return (
    <div className="container">
      <header>
        <h1>All Cars</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>manufacturer</th>
              <th>model</th>
              <th>price</th>
              <th>type</th>
            </tr>
          </thead>

          <tbody>
            {cars.map(car => (
              <tr key={car.id}>
                <td>
                  <a href={'/cars/${car._id}'}>{car.manufacturer}</a></td>
                <td>{car.model}</td>
                <td>{car.price}</td>
                <td>{car.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

    
    

export default Index;

