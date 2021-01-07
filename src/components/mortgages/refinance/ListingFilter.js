import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Dropdown from '../../Dropdown'
import RefinanceFilterFields from '../refinance/RefinancFilterFields'

const ListingFilter = (props) => {
  const { setFiltered, filtersFromQuestions } = props

  const rateTypes = [
    { id: 'item1', label: 'Fixed', value: 'fixed' },
    { id: 'item2', label: 'Variable', value: 'variable' },
  ]
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
  const [totalMortgage, setTotalMortgage] = useState('')

  useEffect(() => {
    const { filtersFromQuestions, setFiltered } = props
    const initialSelectedRateType = rateTypes.find(
      (item) => item.value === filtersFromQuestions.rateType
    )
    const initialSelectedMortgageTerm = mortgageTerms.find(
      (item) => item.value === filtersFromQuestions.mortgageTerm
    )
    const initialSelectedTotalMortgage = filtersFromQuestions.totalMortgage

    const obj = {
      rateType: initialSelectedRateType.value,
      totalMortgage: filtersFromQuestions?.totalMortgage,
      mortgageTerm: initialSelectedMortgageTerm.value,
    }
    setFiltered(obj)

    setSelectedRateType(initialSelectedRateType)
    setSelectedMortgageTerm(initialSelectedMortgageTerm)
    setTotalMortgage(initialSelectedTotalMortgage)
  }, [])

  const setRateTypeValue = (e, item) => {
    e.preventDefault()
    setSelectedRateType(item)
    setIsRateTypeOpen(false)

    const obj = {
      rateType: item.value,
      totalMortgage: totalMortgage,
      mortgageTerm: selectedMortgageTerm.value,
    }
    setFiltered(obj)
  }

  const toggleRateType = () => {
    setIsRateTypeOpen(!isRateTypeOpen)
  }

  const setMortgageTermValue = (e, item) => {
    e.preventDefault()
    setSelectedMortgageTerm(item)
    setIsMortgageTermOpen(false)

    const obj = {
      rateType: selectedRateType?.value,
      totalMortgage: totalMortgage,
      mortgageTerm: item.value,
    }
    setFiltered(obj)
  }

  const toggleMortgageTerm = () => {
    setIsMortgageTermOpen(!isMortgageTermOpen)
  }

  const setFilteredFromInput = (res) => {
    const obj = {
      rateType: selectedRateType?.value,
      totalMortgage: res,
      mortgageTerm: selectedMortgageTerm?.value,
    }
    setFiltered(obj)
  }

  return (
    <ListingFilterContainer>
      <Dropdown
        heading="Rate Type"
        selectedValue={selectedRateType}
        isOpen={isRateTypeOpen}
        toggle={toggleRateType}
        items={rateTypes}
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
      <RefinanceFilterFields
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
