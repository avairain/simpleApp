import { FunctionComponent, useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { userName } from "../../store/user";
import { delList, getList, submitUser, update } from "../../service";
import './index.css';
import { Button, Form, Input } from "antd";
const { Item } = Form;

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  const name = useSelector(userName);
  const [isAdmin, setIsAdmin] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [list, setList] = useState<Awaited<ReturnType<typeof getList>>['data']['list']>([]);
  const getData = useCallback(() => {
    getList()
      .then(res => {
        console.log(res)
        setList(res.data.list);
        setCurrent(0);
      });
  }, []);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (name) {
      submitUser({ user: name })
        .then(res => {
          setIsAdmin(res.data.isAdmin);
        })
    }
  }, [name]);
  const currentInfo = useMemo(() => list[current] ?? {}, [list, current]);
  const onFinish = useCallback((e: { info: string }) => {
    update({ info: e.info, id: currentInfo.id })
      .then(res => {
        getData();
        setIsEdit(false);
      })
  }, [currentInfo])
  return (
    <>
      <div className="home-item">
        {(!isEdit && !isAdmin) ? <span onDoubleClick={() => {
          setIsEdit(true)
        }}>
          {currentInfo.info}
        </span> : <Form onFinish={onFinish} initialValues={currentInfo}>
        <Item name="info" label="info">
          <Input />
        </Item>
        <Button htmlType="submit" type="primary">提交</Button>
      </Form>}
        
      </div>
      <div className="home-item-button">
        {isAdmin && (
          <>
            <Button
              type="primary"
              onClick={() => {
                currentInfo.id && delList({ id: currentInfo.id }).then(() => {
                  getData();
                })
              }}
            >del</Button> &nbsp;
          </>
        )}

        <Button
          type="primary"
          onClick={() => {
            if (current > 0) {
              setCurrent(current - 1)
            }
          }}
        >prev</Button> &nbsp;
        <Button
          type="primary"
          onClick={() => {
            if (current < (list.length - 1)) {
              setCurrent(current + 1)
            }
          }}
        >next</Button>
      </div>
    </>
  )
}

export { Home };
