import { client } from "./lib/client";
import { groq } from "next-sanity";



export const getTours = async (page, pageSize, category, sort, location) => {

  const start = (page - 1) * pageSize
  const end = (start) + pageSize

  try {

    let query

    if (category && location) {
      query = `*[_type == "package" && tour_type->name == '${category}' && tour_location->name == '${location}']`
    } else if (category) {
      query = `*[_type == "package" && tour_type->name == '${category}']`
    } else if (location) {
      query = `*[_type == "package" && tour_location->name == '${location}']`
    } else {
      query = `*[_type == "package"]`
    }

    
    if (sort === "price-high") {
      query += ` | order(price desc)`;
    } else if (sort === "name") {
      query += ` | order(lower(name) asc)`;
    } else if (sort === "date") {
      query += ` | order(upcoming_dates[][0] asc)`;
    } else if (sort === "price-low") {
      query += ` | order(price asc)`;
    }

    const products = await client.fetch(

      groq`${query} [${start}...${end}]{
        _id,
        name,
        slug,
        summary,
        description,
        duration,
        price,
        "tour_location": tour_location->name,
        tour_type,
        upcoming_dates,
        group,
        destination,
        departure,
        departure_time,
        return_time,
        dress_code,
        "gallery": gallery[].asset->url,
        gallery_text,
        location_summary,
        location_details,
        "thumbnail": thumbnail.asset->url,
        "landscabe": landscabe.asset->url,
        "location_image": location_image.asset->url,
        tour_plan,
      }`
    );

    return products;

  } catch (error) {

    console.log(error);

  }
}

export const getToursCount = async (category) => {
  
  try {

    let query
    if (category && category != "all") {
      query = `*[_type == "package" && category == '${category}']`
    } else {
      query = `*[_type == "package"]`
    }



    const productsCount = await client.fetch(
      groq`count(${query})`
    );

    return productsCount;
  } catch (error) {
    console.log(error);
  }
}

export const getTypes = async () => {

  try {
    
    const types = await client.fetch(
      groq`*[_type == "category"]`
    )

    return types

  } catch (error) {
    console.log(error);
  }
}

export const getLocations = async () => {

  try {
    
    const types = await client.fetch(
      groq`*[_type == "location"]`
    )

    return types

  } catch (error) {
    console.log(error);
  }
}


