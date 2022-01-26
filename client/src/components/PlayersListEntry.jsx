import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

const PlayersListEntry = ({data}) => {
  return (

      <li>
        <div>
          <h2>{data.firstname} {data.lastname}</h2>
          <p>Country: {data.country}</p>
          <p>Date of birth: {data.dateofbirth}</p>
          <p>College: {data.collegename}</p>
          <p>Affiliation: {data.affiliation}</p>
          <p>Start NBA: {data.startnba}</p>
          <p>Height: {data.heightinmeters} m</p>
          <p>Weight: {data.weightinkilograms} kg</p>
          </div>
      </li>
      )

}


export default PlayersListEntry;