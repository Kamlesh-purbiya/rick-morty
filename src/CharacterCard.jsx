import React from 'react'

function CharacterCard() {
  return (
    <div>
      <Card className="mb-4 shadow-sm bg-dark text-light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <strong>Species:</strong> {character.species} <br />
          <strong>Status:</strong>{' '}
          <Badge bg={getStatusVariant(character.status)}>
            {character.status}
          </Badge>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CharacterCard
