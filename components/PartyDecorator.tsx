import Party from "../data/party";

interface PartyDecoratorProps {
  party: Party
}

export function PartyDecorator({ party }: PartyDecoratorProps) {
  return <span className={`partyDecorator ${party.className}`} />
}
