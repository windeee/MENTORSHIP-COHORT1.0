const library = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      pages: 180,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      pages: 281,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      pages: 328,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      pages: 432,
    },
  ];
  
  
  // Function 'getTotalPages' to calculate total number of pages from all the books in the library
  const getTotalPages = () => 
  {
    totalPages = 0;
    for( i = 0; i < library.length; i++)
    {
      totalPages += library[i].pages;
    }
  };
  
  
  
  // Function 'getBookTitles' to get lost of titles of all the books in the library
  const getBookTitles = () => 
  {
    for(i = 0; i < library.length; i++)
    {
      document.write(library.title);
    }
  };
  
  
  /* Function "getBooksPublishedAfterYear" that takes a year as a parameter and returns 
  an array containing the titles of books published after that year. */
  const getBooksPublishedAfterYear = (year) => 
  {
    return library
  
    for(i = 0; i < library.length; i++)
    {
      if(library[i].years > year)
      {
        document.write(library[i].title + "\n")
      }
    }
  };
  
  
  
  // Function "getAveragePages" to calculte and return average number of pages
  const getAveragePages = () => 
  {
    const totalPages = getTotalPages();
    return totalPages / library.length;
  };
  
  
  
  // Function "getLongestBook" to return the title of the book with the most pages 
  const getLongestBook = () => 
  {
    var longestBookPages = 0;
    var longestBook = "";
  
    for(i = 0; i < library.length; i++)
    {
      if(library[i].pages > longestBookPages)
      {
        longestBook = library[i].title;
      }
  
      return longestBook;
    }
  };
  
  

  
  /* Funtion "getAuthorsAndBooks" to return an object where the keys are author names 
  and the values are arrays of book titles written by each author. */

  const getAuthorsAndBooks = () => 
  {
    const authorsAndBooks = {};
  
    for(i = 0; i , library.length; i++) 
    {
      if (!authorsAndBooks[library.author]) 
      {
        authorsAndBooks[library.author] = [];
      }
      authorsAndBooks[library.author].push(library.title);
    };
  
    return authorsAndBooks;
  };
  

  
  
  /* Function "getTotalPagesByAuthor" to return an object where the keys are author 
  names and the values are the total number of pages of books written by each author. */

  const getTotalPagesByAuthor = () => 
  {
    const pagesByAuthor = {};
  
    for(i = 0; i , library.length; i++) 
    {
      if (!pagesByAuthor[library.author]) 
      {
        pagesByAuthor[library.author] = 0;
      }
      pagesByAuthor[library.author] += library.pages;
    };
    return pagesByAuthor;
  };
  
  
  


  /* Function "getShortestBookByAuthor" to  return an object where the keys are author 
  names and the values are the titles of the shortest book written by each author. */

  const getShortestBookByAuthor = () => 
  {
    const shortestBookByAuthor = {};
    library.forEach((book) => 
    {
      if (!shortestBookByAuthor[book.author]) 
      {
        shortestBookByAuthor[book.author] = book;
      } 
      
      else if (book.pages < shortestBookByAuthor[book.author].pages) 
      {
        shortestBookByAuthor[book.author] = book;
      }
    });
    const shortestBookTitles = {};
    for (const author in shortestBookByAuthor) 
    {
      shortestBookTitles[author] = shortestBookByAuthor[author].title;
    }
    return shortestBookTitles;
  };
  

  //to export funtions that we have made so far
  module.exports = {
    getTotalPages,
    getBookTitles,
    getBooksPublishedAfterYear,
    getAveragePages,
    getLongestBook,
    getAuthorsAndBooks,
    getTotalPagesByAuthor,
    getShortestBookByAuthor
};
 