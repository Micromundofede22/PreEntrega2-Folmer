import useBreadcrumbs from "use-react-router-breadcrumbs";

// anda, pero muy basico el estilo. 

const MigasPan = () => {
    const breadcrumbs = useBreadcrumbs();
  
    return (
      <>
        {breadcrumbs.map(({ breadcrumb }) =>
            <p>/{breadcrumb} </p>
         )}
      </>
    );
  };

  export default MigasPan

