export const getFoods = async  () => {
    try {
        const response = await fetch(`http://localhost:5173/comidas`);
        console.log("response: " + response);
       
        if(response.ok) {
          const data = await response.json();
          return data
        }else {
          throw new Error("failed to fetch products")
        }
      } catch (error) {
       throw new Error("failed network error")
      }
    }; 