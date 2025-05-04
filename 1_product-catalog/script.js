const products = [
    {
      image: "https://theworldofplay.com/cdn/shop/files/black1_99ababf1-6d30-4c5c-86bc-3d29b58c35e8_400x.png?v=1725024067",
      name: "Wireless Headphones",
      price: "₹7,999",                    
      description: "Noise-cancelling over-ear headphones."
    },
    {
      image: "https://m.media-amazon.com/images/I/61N0vJdjLCL._AC_UF1000,1000_QL80_.jpg",
      name: "Smartwatch",
      price: "₹12,999",
      description: "Fitness tracking smartwatch."
    },
    {
      image: "https://i.pcmag.com/imagery/roundups/05Wq7udCgrIdGzllvYgXck0-7.fit_lim.size_1050x.jpg",
      name: "Gaming Mouse",
      price: "₹2,499",
      description: "Ergonomic gaming mouse."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
      name: "Laptop Stand",
      price: "₹1,999",
      description: "Adjustable aluminium stand."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
      name: "Joystick",
      price: "₹1,999",
      description: "Adjustable aluminium stand."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
      name: "Keyboard",
      price: "₹1,999",
      description: "Adjustable aluminium stand."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
        name: "Television",
        price: "₹1,999",
        description: "Adjustable aluminium stand."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
        name: "Laptop",
        price: "₹1,999",
        description: "Adjustable aluminium stand."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
        name: "CPU",
        price: "₹1,999",
        description: "Adjustable aluminium stand."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
        name: "Mother Board",
        price: "₹1,999",
        description: "Adjustable aluminium stand."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsByxGUtAYlEGHfL4cK2-0vXzkZnB9xDf5aA&s",
        name: "Keyboard Stand",
        price: "₹1,999",
        description: "Adjustable aluminium stand."
      },
    // Add more items as needed
  ];
  
  let currentPage = 1;
  const itemsPerPage = 10;
  
  function displayProducts() {
    const tbody = document.getElementById("productBody");
    tbody.innerHTML = "";
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);
  
    paginatedProducts.forEach(product => {
      const row = `
        <tr>
          <td><img src="${product.image}" alt="${product.name}"/></td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.description}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  
    document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${Math.ceil(products.length / itemsPerPage)}`;
  }
  
  function nextPage() {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      currentPage++;
      displayProducts();
    }
  }
  
  function previousPage() {
    if (currentPage > 1) {
      currentPage--;
      displayProducts();
    }
  }
  
  window.onload = displayProducts;
  