import {SearchPanel} from "./search-panel";
import {List} from "./list";
import React, {useEffect, useState} from "react";
import qs from "qs";
import {cleanObject, useDebounce, useMount} from "../../utils";

const apiURL = process.env.REACT_APP_API_URL
console.log(apiURL)
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [list, setList] = useState([])
  const [users, setUsers] = useState([])

  const debouncedParam = useDebounce(param, 2000)
  useEffect(() => {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())

      }
    })
  }, [debouncedParam])
  useMount(() => {
    fetch(`${apiURL}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users}/>
    <List list={list} users={users}/>
  </div>
}

