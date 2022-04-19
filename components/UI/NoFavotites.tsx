import { Container, Image, Text } from "@nextui-org/react"

export const NoFavotites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>
      <Text h1>No hay favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/Sprites/master/sprites/pokemon/other/dream-world/132.svg'
        alt='image'
        width={250}
        height={250}
        css={{
          opacity: '0.1'
        }}
      />
    </Container>
  )
}
