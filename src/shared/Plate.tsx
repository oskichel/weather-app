import { Card, Space, Typography } from "antd"

type PlateProps = {
  text: string;
}
export const Plate = ({text}: PlateProps) => {
  const { Text } = Typography;
  return (
    <Card style={{height: '100%', width: '100vw', display: 'flex', justifyContent: 'center'}}>
        <Text style={{fontSize: '24px'}}>{text}</Text>
    </Card>
  )
}