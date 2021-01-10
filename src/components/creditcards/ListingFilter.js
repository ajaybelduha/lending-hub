import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Dropdown from '../Dropdown'
import { InputField } from '../common/common'

const ListingFilter = (props) => {
  const { setFiltered, filtersFromQuestions } = props
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const categories = [
    { id: 'item1', label: 'Personal', value: 'personal' },
    { id: 'item2', label: 'Student', value: 'student' },
    { id: 'item2', label: 'Business', value: 'business' },
  ]
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0])

  useEffect(() => {
    const { filtersFromQuestions, setFiltered } = props
    const initialCategory = categories.find(
        (item) => item.label === filtersFromQuestions.category
    )
    setSelectedCategory(initialCategory)

    const initialCardFor = cardFors.find(
        (item) => item.value === filtersFromQuestions.cardFor
    )
    console.log(initialCardFor)
    setSelectedCardFor(initialCardFor)


    const initialCreditScore = creditScores.find(
        (item) => item.label === filtersFromQuestions.creditScore
    )
    console.log(initialCreditScore)
    setSelectedCreditScore(initialCreditScore)
  }, [])

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen)
  }

  const setSelectedCategoryValue = (e, item) => {
    e.preventDefault()
    setSelectedCategory(item)
    setIsCategoryOpen(false)

    const obj = {
      creditScore: selectedCreditScore.label,
      cardFor: selectedCardFor.value,
      category: item.value,
      annualIncome: annualIncome
    }
    setFiltered(obj)
  }







  const [isCardForOpen, setIsCardForOpen] = useState(false)
  const cardFors = [
    { id: 'item1', label: 'Build Credit Score', value: 'build-credit-score' },
    { id: 'item2', label: 'Low Balance Transfer', value: 'low-balance-transfer' },
    { id: 'item3', label: 'Low Interest', value: 'low-interest' },
    { id: 'item4', label: 'Prepaid Cards', value: 'prepaid' },
    { id: 'item5', label: 'Rewards', value: 'rewards' },
    { id: 'item6', label: 'Any', value: 'any' },
  ]
  const [ selectedCardFor, setSelectedCardFor ] = useState(cardFors[0])

  const toggleCardFor = () => {
    setIsCardForOpen(!isCardForOpen)
  }

  const setSelectedCardForValue = (e, item) => {
    e.preventDefault()
    setSelectedCardFor(item)
    setIsCardForOpen(false)

    const obj = {
      creditScore: selectedCreditScore.label,
      cardFor: item.value,
      category: selectedCategory.value,
      annualIncome: annualIncome
    }
    setFiltered(obj)
  }






  const [isCreditScoreOpen, setIsCreditScoreOpen] = useState(false)
  const creditScores = [
    { id: 'item1', label: 'Excellent', value: 'excellent' },
    { id: 'item2', label: 'Good', value: 'good' },
    { id: 'item3', label: 'Fair', value: 'fair' },
    { id: 'item4', label: 'Bad', value: 'bad' },
  ]
  const [ selectedCreditScore, setSelectedCreditScore ] = useState(creditScores[0])

  const toggleCreditScore = () => {
    setIsCreditScoreOpen(!isCreditScoreOpen)
  }

  const setSelectedCreditScoreValue = (e, item) => {
    e.preventDefault()
    setSelectedCreditScore(item)
    setIsCreditScoreOpen(false)

    const obj = {
      creditScore: item.label,
      cardFor: selectedCardFor.value,
      category: selectedCategory.value,
      annualIncome: annualIncome
    }
    setFiltered(obj)
  }






  const [annualIncome, setAnnualIncome] = useState(filtersFromQuestions?.annualIncome[0])
  const handleAnnualIncomeChange = (e) => {
    const value = e.target.value;
    setAnnualIncome(value)

    const obj = {
      creditScore: selectedCreditScore.label,
      cardFor: selectedCardFor.value,
      category: selectedCategory.value,
      annualIncome: value
    }
    setFiltered(obj)
  }






  return (
    <ListingFilterContainer>
      <Dropdown
        heading="Category"
        selectedValue={selectedCategory}
        isOpen={isCategoryOpen}
        toggle={toggleCategory}
        items={categories}
        setValue={setSelectedCategoryValue}
      />
      <Dropdown
        heading="Card For"
        selectedValue={selectedCardFor}
        isOpen={isCardForOpen}
        toggle={toggleCardFor}
        items={cardFors}
        setValue={setSelectedCardForValue}
      />
      <Dropdown
        heading="Credit Score"
        selectedValue={selectedCreditScore}
        isOpen={isCreditScoreOpen}
        toggle={toggleCreditScore}
        items={creditScores}
        setValue={setSelectedCreditScoreValue}
      />
        <div className="field">
            <label className="label">Annual Income</label>
            <div className="control has-icons-left">
                <InputField
                    id="annual-income"
                    name="annualIncome"
                    type="text"
                    placeholder="Amount"
                    className='input'
                    onChange={handleAnnualIncomeChange}
                    value={annualIncome}
                />
                <span className="icon is-small is-left">$</span>
            </div>
        </div>
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
