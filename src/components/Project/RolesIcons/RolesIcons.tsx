import {
  GiGuitarBassHead,
  GiGuitarHead,
  GiMicrophone,
  GiDrumKit,
  GiMusicalKeyboard,
  GiMusicSpell,
} from "react-icons/gi";
import { ReactNode } from "react";

import { useParams } from "react-router-dom";

interface RolesIconsProps {
  roles: string[];
}

const RolesPropsMapper = (role: string): ReactNode => {
  const ComponentRoles: any = {
    bassplayer: <GiGuitarBassHead className="icon" />,
    guitarrist: <GiGuitarHead className="icon" />,
    singer: <GiMicrophone className="icon" />,
    drummer: <GiDrumKit className="icon" />,
    keyboard: <GiMusicalKeyboard className="icon" />,
    other: <GiMusicSpell className="icon" />,
  };

  return ComponentRoles[role];
};

export const RolesIcons = ({ roles }: RolesIconsProps): JSX.Element => {
  const { id: projectIdDetails } = useParams();
  let limit: number = projectIdDetails ? roles.length : 3;
  return (
    <>
      {roles.map((role: string, index, array) => {
        if (index > limit) {
          return null;
        } else if (index === limit) {
          return (
            <div key={role} className="icon-container">
              +{array.length - limit}
            </div>
          );
        }
        return (
          <div
            key={role}
            className={projectIdDetails && "icon-container--details"}
          >
            <div title={role} className="icon-container">
              {RolesPropsMapper(role)}
            </div>
            <span>{projectIdDetails && `This projects needs a ${role}`}</span>
          </div>
        );
      })}
    </>
  );
};
