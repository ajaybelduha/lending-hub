import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Dropdown from '../Dropdown'
import TotalMortgageInputs from './TotalMortgageInputs'

const ListingFilter = (props) => {
  const { setFiltered, filtersFromQuestions } = props

  const rateTypes = [
    { id: 'item1', label: 'Fixed', value: 'fixed' },
    { id: 'item2', label: 'Variable', value: 'variable' },
  ]

  const [filterObject, setFilterObject] = useState({})
  const [selectedRateType, setSelectedRateType] = useState(rateTypes[0])
  const [isRateTypeOpen, setIsRateTypeOpen] = useState(false)

  const mortgageTerms = [
    { id: 'item1', label: '1', value: 1 },
    { id: 'item2', label: '2', value: 2 },
    { id: 'item3', label: '3', value: 3 },
    { id: 'item4', label: '4', value: 4 },
    { id: 'item5', label: '5', value: 5 },
  ]
  const [selectedMortgageTerm, setSelectedMortgageTerm] = useState(
    mortgageTerms[0]
  )
  const [isMortgageTermOpen, setIsMortgageTermOpen] = useState(false)

  useEffect(() => {
    const { filtersFromQuestions, setFiltered } = props
    const initialSelectedRateType = rateTypes.find(
      (item) => item.value === filtersFromQuestions.rateType
    )
    const initialSelectedMortgageTerm = mortgageTerms.find(
      (item) => item.value === filtersFromQuestions.mortgageTerm
    )
    setSelectedRateType(initialSelectedRateType)
    setSelectedMortgageTerm(initialSelectedMortgageTerm)

    const obj = {
      rateType: initialSelectedRateType.value,
      totalMortgage: 484640,
      mortgageTerm: initialSelectedMortgageTerm.value,
    }
    setFilterObject(obj)
    setFiltered(obj)
  }, [])

  const toggleRateType = () => {
    setIsRateTypeOpen(!isRateTypeOpen)
  }

  const setRateTypeValue = (e, item) => {
    e.preventDefault()
    console.log('setRateTypeValue -> ', item)
    setSelectedRateType(item)
    setIsRateTypeOpen(false)

    const obj = {
      ...filterObject,
      rateType: item.value,
    }
    setFilterObject(obj)
    setFiltered(obj)
  }

  const setMortgageTermValue = (e, item) => {
    e.preventDefault()
    setSelectedMortgageTerm(item)
    setIsMortgageTermOpen(false)

    const obj = {
      ...filterObject,
      mortgageTerm: item.value,
    }
    setFilterObject(obj)
    setFiltered(obj)
  }

  const toggleMortgageTerm = () => {
    setIsMortgageTermOpen(!isMortgageTermOpen)
  }

  const setFilteredFromInput = (res) => {
    const obj = {
      ...filterObject,
      totalMortgage: res?.principal,
      downPaymentPercent: res?.dp
    }
    setFilterObject(obj)
    setFiltered(obj)
  }

  return (
    <ListingFilterContainer>
      <Dropdown
        heading="Rate Type"
        selectedValue={selectedRateType}
        items={rateTypes}
        isOpen={isRateTypeOpen}
        toggle={toggleRateType}
        setValue={setRateTypeValue}
      />
      <Dropdown
        heading="Mortgage Term"
        selectedValue={selectedMortgageTerm}
        isOpen={isMortgageTermOpen}
        toggle={toggleMortgageTerm}
        items={mortgageTerms}
        setValue={setMortgageTermValue}
      />
      <TotalMortgageInputs
        setFilteredFromInput={setFilteredFromInput}
        filtersFromQuestions={filtersFromQuestions}
      />
    </ListingFilterContainer>
  )
}

const ListingFilterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  @media screen and (max-width: 786px) {
    display: none;
  }
`

export default ListingFilter
