import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import Dropdown from '../Dropdown'
import { InputField, BlackButtonInverse } from '../common/common'
import { annualFeesData, cardFor, subCategory, creditScores, networks } from '../../utils/constants'

const ListingFilter = ({ setFiltered, filtersFromQuestions }) => {
  const [showFilters, setShowFilters] = useState(false)
  const [dropdownValues, setDropdownValues] = useState({})

  const onDropdownSelect = (item, value) => {
    const obj = { [item]: value }
    setDropdownValues({ ...dropdownValues, ...obj })
    setFiltered({ ...dropdownValues, ...obj })
    console.log({ ...dropdownValues, ...obj })
  }

  useEffect(() => {
    const initialCardFor = cardFor.find(
      (item) => item.value === filtersFromQuestions.cardFor
    )
    const initialCreditScore = creditScores.find(
      (item) => item.label === filtersFromQuestions.creditScore
    )
    const initialAnnualFees = annualFeesData.find(
      (item) => item.value === filtersFromQuestions.annualFees
    )
    const obj = {
      cardFor: initialCardFor.label,
      creditScore: initialCreditScore.label,
      network: networks[0].label,
      annualFees: initialAnnualFees.value,
      rewardType: subCategory[3].value
    }
    setDropdownValues(obj)
    setFiltered(obj)
  }, [])

  return (
    <ListingFilterContainer>
      <div className="mob-filter-toggle mb-6">
        <BlackButtonInverse onClick={() => setShowFilters(!showFilters)}>Reset filters</BlackButtonInverse>
      </div>
      <div className={classNames('filters', { hide: !showFilters })}>
        <NetworkDropdown onDropdownSelect={onDropdownSelect} />
        <CardForDropdown onDropdownSelect={onDropdownSelect} />
        <CreditScoreDropdown onDropdownSelect={onDropdownSelect} />
        <AnnualFeesDropdown onDropdownSelect={onDropdownSelect} />
        {dropdownValues.cardFor === 'rewards' && <RewardTypeDropdown onDropdownSelect={onDropdownSelect} />}
      </div>
    </ListingFilterContainer>
  )
}

const NetworkDropdown = ({ onDropdownSelect }) => {
  const [isNetworkOpen, setIsNetworkOpen] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0])

  const toggleNetwork = () => {
    setIsNetworkOpen(!isNetworkOpen)
  }

  const setSelectedNetworkValue = (e, item) => {
    e.preventDefault()
    setSelectedNetwork(item)
    setIsNetworkOpen(false)

    onDropdownSelect('network', item.value)
  }
  return (
    <Dropdown
      heading="Network"
      selectedValue={selectedNetwork}
      isOpen={isNetworkOpen}
      toggle={toggleNetwork}
      items={networks}
      setValue={setSelectedNetworkValue}
    />
  )
}

const CardForDropdown = ({ onDropdownSelect }) => {
  const [isCardForOpen, setIsCardForOpen] = useState(false)
  const [selectedCardFor, setSelectedCardFor] = useState(cardFor[0])

  const toggleCardFor = () => {
    setIsCardForOpen(!isCardForOpen)
  }

  const setSelectedCardForValue = (e, item) => {
    e.preventDefault()
    setSelectedCardFor(item)
    setIsCardForOpen(false)

    onDropdownSelect('cardFor', item.value)
  }
  return (
    <Dropdown
      heading="Card For"
      selectedValue={selectedCardFor}
      isOpen={isCardForOpen}
      toggle={toggleCardFor}
      items={cardFor}
      setValue={setSelectedCardForValue}
    />
  )
}

const CreditScoreDropdown = ({ onDropdownSelect }) => {
  const [isCreditScoreOpen, setIsCreditScoreOpen] = useState(false)
  const [selectedCreditScore, setSelectedCreditScore] = useState(creditScores[0])

  const toggleCreditScore = () => {
    setIsCreditScoreOpen(!isCreditScoreOpen)
  }

  const setSelectedCreditScoreValue = (e, item) => {
    e.preventDefault()
    setSelectedCreditScore(item)
    setIsCreditScoreOpen(false)

    onDropdownSelect('creditScore', item.value)
  }
  return (
    <Dropdown
          heading="Credit Score"
          selectedValue={selectedCreditScore}
          isOpen={isCreditScoreOpen}
          toggle={toggleCreditScore}
          items={creditScores}
          setValue={setSelectedCreditScoreValue}
        />
  )
}

const RewardTypeDropdown = ({ onDropdownSelect }) => {
  const [isRewardTypeOpen, setIsRewardTypeOpen] = useState(false)
  const [selectedRewardType, setSelectedRewardType] = useState(subCategory[0])

  const toggleRewardTypes = () => {
    setIsRewardTypeOpen(!isRewardTypeOpen)
  }

  const setSelectedRewardTypeValue = (e, item) => {
    e.preventDefault()
    setSelectedRewardType(item)
    setIsRewardTypeOpen(false)

    onDropdownSelect('rewardType', item.value)
  }
  return (
    <Dropdown
      heading="Reward Type"
      selectedValue={selectedRewardType}
      isOpen={isRewardTypeOpen}
      toggle={toggleRewardTypes}
      items={subCategory}
      setValue={setSelectedRewardTypeValue}
    />
  )
}

const AnnualFeesDropdown = ({ onDropdownSelect }) => {
  const [isAnnualFeesOpen, setIsAnnualFeesOpen] = useState(false)
  const [selectedAnnualFees, setSelectedAnnualFees] = useState(annualFeesData[0])

  const toggleAnnualFees = () => {
    setIsAnnualFeesOpen(!isAnnualFeesOpen)
  }

  const setSelectedAnnualFeesValue = (e, item) => {
    e.preventDefault()
    setSelectedAnnualFees(item)
    setIsAnnualFeesOpen(false)

    onDropdownSelect('annualFees', item.value)
  }
  return (
    <Dropdown
      heading="Annual Fee"
      selectedValue={selectedAnnualFees}
      isOpen={isAnnualFeesOpen}
      toggle={toggleAnnualFees}
      items={annualFeesData}
      setValue={setSelectedAnnualFeesValue}
    />
  )
}

const ListingFilterContainer = styled.div`
  margin-top: 20px;
  .filters {
    display: flex;
    flex-wrap: wrap;
  }
  .mob-filter-toggle {
    display: none;
  }
  @media screen and (max-width: 786px) {
    .mob-filter-toggle {
      display: block;
    }
  }
`

export default ListingFilter
